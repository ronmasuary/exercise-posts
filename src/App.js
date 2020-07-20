import React, { useState } from 'react';
import Posts from './components/Posts'
import flower from './img/flower.png'
import mountains from './img/mountains.png'
import greenMountain from './img/greenMountain.png'
import './App.css';

function App() {


//יצרתי מערך של פוסטים. כל איבר במערך הוא אובייקט פוסט
// כל אובייקט מעיל שם,פרטים ותמונה.
// כדי להביא את התמונות יצרתי תיקייה וייבאתי ממנה תמונות בדיוק כמו ייבוא של קומפוננטות או כל סיפרייה אחרת
  const [posts,setPosts]=useState([
    {name:'Ron',details:'my name is Ron and i have a girlfriend',img:<img src={mountains} alt="mountains"/>},
    {nami:'Yarin',details:'my name is Yarin and i dont have a girlfriend',img:<img src={greenMountain} alt="green"/>},
    {name:'Gil',details:'my name is Gil and i have a something',img: <img src={flower} alt="flower"/>}
  ])
  

  //שלחתי כפורפס את מערך הפוסטים לקומפוננטה שתציג אותם
  return (
    <div className="App">
      <Posts
      posts={posts}
     
      />
        
       


    </div>
  );
}

export default App;
