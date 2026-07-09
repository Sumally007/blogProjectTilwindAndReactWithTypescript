import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import { BlogProvider } from "./components/shared/BlogContext";
import TopicsList from "./components/TopicsList";
import { TrendsList } from "./components/TrendsList";

const App = () => {
  return (
    <div>
      <BlogProvider>


        <Navigation />

        <div className="flex justify-center">

          {/* main area */}
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  )
}

export default App