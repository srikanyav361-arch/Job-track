import "../App.css";
function Home(){
    return(
       <main>
        <section className="Hero-section">
            <h1>find your dream job</h1>
            <p>Search, apply, and track your job applications in one place.
</p>
<button>Browse Jobs</button>

        </section>
        <section className="search-section">
            <input type="text" placeholder="job title or keyword"/>
            <input type="text" placeholder="location"/>
            <button>search jobs</button>

        </section>
       </main>
    )
}
export default Home;