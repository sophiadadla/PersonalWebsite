import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home2";
import { NotFound } from "./pages/NotFound2";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;