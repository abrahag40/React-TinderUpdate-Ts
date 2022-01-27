import { createRef, useEffect, useMemo, useRef, useState } from "react"
import TinderCard from "react-tinder-card"
import { FooterButtons } from "."
import { getCharacter } from "../network/characters"
import PeopleCard from "../UI/atoms/PeopleCard"
import SwipeAction from '../UI/atoms/SwipeAction';

export const TinderCards = () => {

  interface Character {
    id: number;
    gender: string;
    image: string;
    name: string;
    species: string;
  }

  type MyStructure = Character[] | Character;

  const [ people, setPeople ] = useState<MyStructure>([])
  const [currentIndex, setCurrentIndex] = useState(( people as [] ).length - 1)
  const currentIndexRef = useRef<(any | null)>(currentIndex)
  const [ swipeActioned, setSwipeActioned ] = useState(null)

  useEffect(() => {
    getPerson()
  }, [])

  const childRefs = useMemo<(any | null)>(
    () =>
      Array((people as []).length)
        .fill(0)
        .map((i) => createRef()),
    [people]
  )

  const getPerson = () => {
    
    const peopleArray:any = []

    for (let i = 0; i < 20; i++) {
      const randNum = 3 * Math.floor(Math.random() * 500)
      peopleArray.push(randNum)
    }

    getCharacter( peopleArray )
      .then(res => {
        setPeople(res)
        setCurrentIndex((res as []).length - 1)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const updateCurrentIndex = ( val: any ) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const onSwipe = ( { dir, name, index }: any ) => {
    setSwipeActioned(dir)
    updateCurrentIndex(index - 1)
    if (currentIndexRef.current  === 0) {
      getPerson()
    }
    setPeople(lastItems=> (lastItems as []).filter((_, i) => i !== (lastItems as []).length))
  }

  const goBack = async () => {
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }
  
  const onCardLeftScreen = () => {
    setSwipeActioned(null)
  }

  const swipeFunc = async (dir: string) => {
    await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
  }

  return (
    <>
    <div>
      <div>
        {
          (people as []).length > 0 &&
          (people as []).map( (res, index) => {
              const { id, name, image, gender, species } = res;
              return (
                <TinderCard 
                  ref={childRefs[index]}
                  key={id}
                  onSwipe={ (dir) => {
                    const obj = {
                      dir, name, index
                    }
                    onSwipe(obj)
                  }}
                  preventSwipe={['down']}
                  onCardLeftScreen={onCardLeftScreen}
                >
                  <PeopleCard 
                    id={id} 
                    name={name} 
                    image={image} 
                    gender={gender} 
                    species={species}
                  />
                </TinderCard>
              )
            })
        }
      </div>
    </div>
    <FooterButtons swipeFunc={swipeFunc} goBack={goBack} /> 
    {
      swipeActioned &&
      <SwipeAction action={swipeActioned} />
    }
    </>
  )
}

export default TinderCards
