import { useEffect } from "react";

const ImageOverlay = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {



  return (
    <div className="absolute inset-0 w-full h-screen text-white animate-fadeIn overflow-y-auto">
  
  
  {/* CENTERED STACK */}
  <div className="flex flex-col items-center gap-8 sm:gap-10 text-center z-10 pt-20 h-screen">
    {children}
  </div>

    {/* Dark overlay */}
  {/* <div className="absolute inset-0 bg-black/10 z-1"></div> */}
</div>
  
  )}

export default ImageOverlay;
