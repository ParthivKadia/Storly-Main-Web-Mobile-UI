// // // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // // import { Toaster as Sonner } from "@/components/ui/sonner";
// // // import { Toaster } from "@/components/ui/toaster";
// // // import { TooltipProvider } from "@/components/ui/tooltip";

// // import Index from "./pages/index";
// // // import About from "./pages/About";
// // // import NotFound from "./pages/NotFound";

// // // const queryClient = new QueryClient();

// // function App() {
// //   return 
// // //   (
// //     // <QueryClientProvider client={queryClient}>
// //       {/* <TooltipProvider> */}
// //         // <Toaster />
// //         {/* <Sonner /> */}

// //         <BrowserRouter>
// //           <Routes>
// //             <Route path="/" element={<Index />} />
// //             {/* <Route path="/about" element={<About />} /> */}
// //             {/* <Route path="*" element={<NotFound />} /> */}
// //           </Routes>
// //         </BrowserRouter>

// //       {/* </TooltipProvider> */}
// //     {/* </QueryClientProvider> */}
// // //   );
// // }

// export default App;


import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}