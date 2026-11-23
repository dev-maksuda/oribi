const routes = createRoutesFromElements(
  <>
    <Route index loader={step1Loader} Component={StepOne} />
    <Route path="step-2" loader={step2Loader} Component={StepTwo} />
    <Route path="step-3" loader={step3Loader} Component={StepThree} />
  </>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      
    </>
  )
}

export default App
