import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UseRefExample from "./components/UseRefExample";
// import ClassBasedComponentEx from "./components/ClassBasedComponenEx"
// import CounterUsingClass from "./components/CounterUsingClass"
// import LifeCycleClassBased from "./components/LifeCycleClassBased"
// import FetchingUserClassBased from "./components/FetchingUserClassBased"
// import UseMemoExample from "./components/UseMemoExample"
// import UseEffectExample from "./components/UseEffectExample";

// import UseMemoExample from "./components/UseMemoExample";
// import ErrorBoundaryConcept from "./example/ErrorBoundaryConcept";
// import ErrorBoundary from "./example/ErrorBoundary";
import LoginPage from "./pages/LoginPage";
import UserInfoPage from "./pages/UserInfoPage";
import UseReducerExample from "./components/UseReducerExample";

const App = () => {
  return (
    <div className="flex w-full h-dvh justify-center items-center text-3xl flex-col  gap-12">
      <BrowserRouter>
        <Routes>
          {/* <ClassBasedComponentEx name="SDM"/> */}
          {/* <CounterUsingClass name="SDM"/> */}
          {/* <LifeCycleClassBased userId={12339}/> */}
          {/* <FetchingUserClassBased/> */}
          {/* <UseEffectExample name="SDM"/> */}
          {/* <UseMemoExample/> */}
          {/* <Route index element={<LoginPage />} /> 
          <Route path="/login/:userName/:userEmail" element={<UserInfoPage/>}/> */}
        </Routes>
        {/*
        <div className="flex flex-col gap-5">
          <ErrorBoundary fallback={'Something went wrong'}>
            <ErrorBoundaryConcept  heroName={"ironman"} />
          </ErrorBoundary>
          <ErrorBoundary fallback={'Something went wrong'}>
            <ErrorBoundaryConcept  heroName={"joker"} />
          </ErrorBoundary>
        </div>
        */}
        {/* <UseMemoExample/> */}
        {/* <UseRefExample /> */}
        <UseReducerExample/>
      </BrowserRouter>
    </div>
  );
};

export default App;
