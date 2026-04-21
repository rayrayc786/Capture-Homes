import React from 'react';

const ArtifactsGallery = ({ data }) => {
  return (
    <section id="gallery" class="py-32 px-6 md:px-12 bg-surface">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span class="text-primary font-bold tracking-widest text-xs uppercase">{data.eyebrow}</span>
            <h2 class="text-4xl md:text-5xl font-extrabold tracking-tighter mt-4 text-on-surface">{data.title}</h2>
          </div>
          <a class="text-sm font-bold border-b-2 border-on-surface pb-1 tracking-widest uppercase hover:text-primary hover:border-primary transition-all transition-colors" href="#">View All Work</a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:auto-rows-[450px]">
          {data.items.map((item) => (
            <div key={item.id} className={`${item.cols} group relative overflow-hidden bg-surface-container-low rounded-sm shadow-lg`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 shadow-inner"
              />
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                <span className="text-primary text-xs font-bold tracking-widest mb-3 uppercase">{item.category}</span>
                <h4 className="text-white text-4xl font-bold tracking-tighter">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtifactsGallery;
