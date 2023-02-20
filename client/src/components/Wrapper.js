
const Wrapper = (props) => {
  return (
    <div className='border border-black bg-gray-200 rounded-2xl px-8 py-4'>
      {props.children}
    </div>
  )
}

export default Wrapper