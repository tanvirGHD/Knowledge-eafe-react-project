import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {

  const [bookmarks, setBookmarks]= useState([]);
  const [readingTime , setReadingTime] = useState(0)

  // BookMarks
  const handleAddBookMarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  // Total read time
  const handleMarksAsRead = time => { 
    const newReadingTime = parseInt(readingTime) + parseInt(time); // Convert both to integers
    setReadingTime(newReadingTime); 
  }
  
  


  return (
    <>
      <Header></Header>
      <main className='md:flex w-10/12 mx-auto'>
      <Blogs handleAddBookMarks={handleAddBookMarks} handleMarksAsRead={handleMarksAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
