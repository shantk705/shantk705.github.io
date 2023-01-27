import React from 'react'

const  Cards=() =>{
    return (
      <div className="wrapper">
        <Card
          img="https://dlcdnwebimgs.asus.com/gain/6FE37E07-B41F-4238-81D8-433B425405C5"
          title="ASUS STRIX "
          description="2 TB-16GB Ram-I7"
          price="1680.99"
        />
  
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFPbM1ISzqW9APzhTv8VwcCcwPyossXVqiw&usqp=CAU"
          title="HP OMEN"
          description="2 TB-16GB Ram-I7"
          price="1916.00"
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRVlQl8hGPfiJMn5KajMX--jwqzNXkbNspw&usqp=CAU"
          title="Lenovo Leigon"
          description="2 TB-16GB Ram-I7"
          price="1315.99"
        />
        <Card
          img="https://www.digitaltrends.com/wp-content/uploads/2023/01/HP-Laptop-15-dw4047nr-15.622-Windows-11-Home-Intel%C2%AE-Core%E2%84%A2-i5-8GB-RAM-256GB-HDD-FHD.jpg?fit=720%2C540&p=1"
          title="HP white edition"
          description="8 GB RAM - I5"
          price="715.00"
        />
        <Card
        img="https://m.media-amazon.com/images/I/41KCjrjY0jL._AC_SY350_QL15_.jpg"
        title="MSI "
        description="16GB-I7"
        price="910.99"
      />
      <Card
      img="https://www.digitaltrends.com/wp-content/uploads/2021/08/macbook-air.jpg?fit=1000%2C500&p=1"
      title="Apple Mackbook 13 "
      description="does not matter!"
      price="1"
    />
      </div>
    );
  }
  
  function Card(props) {
    return (
      <div className="card">
        <img src={props.img} className="card__img"  alt='a'/>
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <h3 className="card__price">{props.price}</h3>
          <button className="card__btn">Add to Cart</button>
        </div>
      </div>
    );
  }
  
  
  
  /*
  
  <Card
          img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
          title="Tie Up Boots"
          description="Fall Favorite • Boots"
          price="45.00"
        />
        
        
  
  
  */
  
export default Cards;
