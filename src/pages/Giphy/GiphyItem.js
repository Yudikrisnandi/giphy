export default function GiphyItem({ src, alt }) {
  return (
    <div> 
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full"
      />
    </div>
  );
}

