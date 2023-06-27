import './rightbar.scss';
export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className='container'>
                <div className='item'>
                    <span>People You May Konw</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='user' />

                            <span>RuhamaKamso May</span>
                        </div>
                        <div className='buttons'>
                            <button>follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='user' />

                            <span>RuhamaKamso May</span>
                        </div>
                        <div className='buttons'>
                            <button>follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <span>Latest Activities</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='user' />

                            <p><span>Ruhama Kamso </span></p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                </div>

            </div>
        </div>
    )
}