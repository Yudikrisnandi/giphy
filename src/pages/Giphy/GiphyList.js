import Loading from '../../components/Loading';
import GiphyItem from './GiphyItem';

function GiphyList({ isLoading, error, data }) {
  if(isLoading){
    return(
      <div className="flex full justify-center items-center h-36" >
        <Loading />
      </div>
    )
  };
  if(error){
    return(
      <div className="flex full justify-center items-center h-36" >
        Something went wrong!
      </div>
    )
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mt-3">
      {data && data.map(giphy => (
        <GiphyItem 
          key={giphy.get('id')}
          src={giphy.getIn(['images', 'fixed_height', 'url'])} 
          alt={giphy.get('title')} 
        />
      ))}
    </div>
  );
}

export default GiphyList;
