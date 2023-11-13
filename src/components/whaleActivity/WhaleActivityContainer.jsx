import Card from './WhaleActivityCard'

const WhaleActivityContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='title-sm  mr-auto px-4 mb-5 text-xl font-extrabold tracking-wider' >Whale activity</h1>
        <Card />
    </div>
  )
}

export default WhaleActivityContainer