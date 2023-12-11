import { Circles } from  'react-loader-spinner'
import { WrapperLoader } from './Loader.styled';

export const Loader = () =>
(<WrapperLoader>
    <Circles
  height="150"
  width="150"
  color="#000C66"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="circles-loading"
/>
</WrapperLoader>);