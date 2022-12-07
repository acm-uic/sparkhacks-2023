function index() {
  return (
    <section className='grid place-items-center bg-primary h-[700px]'>
      <form
        action=''
        method='post'
        className='w-6/12 rounded-[50px] h-96 bg-secondary-light p-10 z-10'
      >
        <h2>Join Our Newletter!</h2>
        <p>
          Want to get updates as fast as possible! Join our newsletter! We will
          send details about the event with sign up and RSVP forms as we get
          closer to the start date! We will also send insights into what types
          of events we are planning, and much more! Sign up to make sure you get
          the latest as soon as possible!
        </p>
        <div className='h-10 mt-5'>
          <input
            type='text'
            value=''
            placeholder='Email:'
            className='w-[70%] h-10 rounded-full p-5 mr-3 border-2 border-secondary-dark	'
          />
          <input
            type='submit'
            value='Submit'
            className='bg-primary-light h-10 rounded-full w-40 font-bold text-white '
          />
        </div>
      </form>
      <form
        action=''
        method='post'
        className='w-6/12 h-96 rounded-[50px] bg-primary-dark p-16 absolute -translate-x-16 -translate-y-10 z-0'
      ></form>
    </section>
  );
}

export default index;
