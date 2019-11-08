import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search isHome />
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

// función que nos trae del estado los elementos
//No es necesario traer todos los elementos, solo los que se necesitan

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

//envía dos parámetros principales, el mapeo de nuestros props y los elementos que vamos a disparar(actions), después solo conectamos Home

export default connect(mapStateToProps, null)(Home);

//mapStateToProps= vamos a pasar lo que tenemos dentro del estado a propiedades que va a utilizar el documento
//null= Segundo elemento que nos va a permitir mapear las acciones que vamos a ejecutar