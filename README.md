# use of useState hook

## Remove Item from an array using useState

- const [initialArrayElements, setArrayElements] = useState(initialElements).
- create a function like as const removeElement = (id) => {
  - const newElements = initialArrayElements.filter(singleElement) => {
    singleElement.id !== id
    }

* setArrayElements(newElements)
  }

# Then make a component like this

```
 <>
      {initialArrayElements.map((element) => {
        return (
          <div className='item'>
            <RemovePeople
              key={element.id}
              element={element}

            />
            <button className='' onClick={() => removeElement(element.id)}>
              Remove
            </button>
          </div>
        )
      })}
    </>
```
