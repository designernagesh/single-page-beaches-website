import './ViewsStyles.scss';
import data from '../../data/data';
import ViewsImage from '../viewsImage/ViewsImage';

const Views = () => {
    return (
        <div name='views' className='views'>
            <div className='container'>
                {
                    data.map((img, i) => {
                        return (
                            <ViewsImage bgImg={img.image} title={img.title} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Views;