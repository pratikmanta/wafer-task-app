import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "./CardItem";
import './imageCard.css'
import { getImageList } from "../../redux/reducers/imageListSlice";

const CardList = () => {
  const dispatch = useDispatch()

  // trigger list of images on page load
  useEffect(() => {
    dispatch(getImageList())
  },[dispatch])

  const imageList: any = useSelector((state:any) => state.imagesListData.imageList);
  const searchedList: any = useSelector((state:any) => state.searchImageList.searchedImages);

  const SearchedData = () => (
    searchedList.map((imageData: any) => (
        <CardItem key={imageData.id} imageItem={imageData} />
    ))
  )

  const PhotoListData = () => (
    imageList.map((imageData: any) => (
        <CardItem key={imageData.id} imageItem={imageData} />
    ))
  )

  return (
    <section className="cardList-container">
      <div className="cardList-columns">
        {searchedList.length ? <SearchedData/> : <PhotoListData/> }
      </div>
    </section>
  )
}

export default CardList;