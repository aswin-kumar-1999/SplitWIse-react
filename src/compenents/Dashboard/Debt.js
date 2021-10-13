function Debt(props) {
    return (
        <>
            <div className="d-flex flex-wrap align-items-center justify-content-center px-4 py-3">

                <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby36-100px.png" alt="Avatar" className='rounded-circle' width='40px' height='40px'></img>

                <div className='px-3'>
                    {props.name}
                    <div style={{ color: '#07e2b3' }}>you owe INR {props.amount}</div>
                </div>
            </div>
        </>
    )
}

export default Debt