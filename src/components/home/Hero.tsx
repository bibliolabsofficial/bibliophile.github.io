export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper | wrapper">
        <h2 className="hero__title">The Art of War</h2>
        <h3 className="hero__subtitle">Sun Tzu</h3>
        
        <p className='hero__description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          reiciendis sed error doloribus ex accusamus dicta excepturi nesciunt,
          voluptatibus hic impedit aliquid accusantium laboriosam ab tenetur
          aperiam, nihil minus blanditiis. <br /><br />Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Provident obcaecati alias assumenda
          dicta laboriosam soluta sapiente ipsum unde? Facilis vel natus
          asperiores in deserunt eos explicabo ea quam fuga nostrum.
        </p>
        
        <div className='hero__btns'>
          <button className='hero__btn' type='button'>
            <a href='#'>Read on app</a>
          </button>
          
          <button className='hero__btn' type='button'>
            <a href='#'>Learn more</a>
          </button>
        </div>
      </div>
    </section>
  );
}
