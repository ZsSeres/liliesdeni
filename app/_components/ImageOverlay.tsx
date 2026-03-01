const ImageOverlay = ({
  children,
}: {
  children: React.ReactNode
}) => {  
  return (
    <div className="absolute inset-0 z-20 text-white">
      
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Scroll container */}
      <div className="relative h-full overflow-y-auto" >
        <div className="flex flex-col items-center sm:gap-10 text-center pt-20 px-4">
          {children}
        </div>
      </div>

    </div>
  )
}

export default ImageOverlay