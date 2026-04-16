import React from 'react';

const EditorialSection = ({ data }) => {
  return (
    <section id="editorial" className="py-32 px-6 md:px-12 bg-surface-container-low border-y border-on-surface/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase underline underline-offset-8 decoration-2">{data.eyebrow}</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mt-8 text-on-surface">
              {data.title}
            </h2>
          </div>
          <button className="text-sm font-bold tracking-widest border-b-2 border-on-surface hover:text-primary hover:border-primary transition-all pb-2 uppercase text-on-surface">Explore Journal</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.articles.map((article, idx) => (
            <article key={article.id} className={`group cursor-pointer ${idx === 1 ? 'md:mt-24' : ''}`}>
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-surface-container-high rounded-sm shadow-xl relative">
                <img 
                  src={article.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  alt={article.title}
                />
              </div>
              <div className="flex gap-4 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest py-1 px-3 bg-on-surface text-surface rounded-full">{article.tag}</span>
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest py-1">{article.date}</span>
              </div>
              <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors mb-4 text-on-surface">
                {article.title}
              </h4>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                {article.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
