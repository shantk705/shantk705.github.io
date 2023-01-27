

const TAGS = ['Razer', 'Hyperx', 'Asus', 'Gigabyte', 'Nvidia', 'RedDragon', 'Logitech', 'Zowie', 'Zotac', 'HP', 'Lenovo', 'Acer','LG','Intel', 'Radeon', 'AMD', 'Ryzen', 'Toshiba', 'Dell', 'MSI', 'Seatgate', 'Kingston', 'Apple', 'Samsung'];
const DURATION = 12000;
const ROWS = 1;
const TAGS_PER_ROW = 999;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () =>2 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

const Tags = () => (
  <div className='app'>
   
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
  </div>
);

export default Tags;