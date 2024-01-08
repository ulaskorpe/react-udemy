import React, {  useState,useEffect} from "react"; 

const NewsApp = ()=>{

const [news,setNews] = useState([]) ;
const [searchQuery,setSearchQuery] = useState('react');
const [url,setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')
const [loading, setLoading] = useState(false);
  const fetchNews = ()=>{
    setLoading(true);
    fetch(url)
    .then(result => result.json())
    .then(data => (setNews(data.hits),setLoading(false)))
    
    .catch(error => console.log(error));
  }
  useEffect(()=>{
    fetchNews();
  },[url]);

  const handleChange= (e)=>{
    setSearchQuery(e.target.value)
  }
const handleSubmit  = (e)=>{
  e.preventDefault();
  setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
}

const showLoading = ()=>( loading ? <h2>Loading ... </h2> : "")
 
const searchForm = ()=>(
  <form onSubmit={handleSubmit}> 
  <input type="text" onChange={handleChange}  value={searchQuery}  />
 <button>Search</button>
  </form>
)
const showNews = ()=>(
  <ul>
  {news.map((n,i)=>(
   <li key={i}>
     <p>
     {n.title}
     <br/>
     <a href={n.url} target="_blank">{n.url}</a>
     </p>
   
   
   </li>
   ))}
   </ul>
)
    return(
        <div>
         <h2>News</h2>
        {showLoading()}
         <div>
         {searchForm()}
          </div> 
        {showNews()}
      </div>

        );
}

export default NewsApp;