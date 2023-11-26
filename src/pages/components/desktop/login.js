import './login_light.css'
import './login_dark.css'

const Login = ({ mode, loggedIN }) => {
    if (loggedIN) return
    else return (<div className={mode}>
        <div className='background'>
            <div className='login_container'>
                <div className='icon'>
                    <img alt="神奇的藥水..嗎" src="./logo_256.png"></img>
                </div>
                <div className='text'>
                    <h1><b>你好像還沒有登入?</b></h1>
                    <p>那就趕快點擊下方按鈕登入吧!</p>
                </div>
                <div className='button'>
                    <a href='https://discord.com/oauth2/authorize?client_id=1177181521027805204&redirect_uri=http%3A%2F%2Flocalhost%2Flogin&response_type=code&scope=identify%20guilds%20email'>
                        <div className='login_button'>
                            <div className='icon'>
                                <img src='./icons/icon_discord.png' alt='使用Discord登入'></img>
                            </div>
                            <div className='text'><p><b>使用Discord登入</b></p></div>
                        </div>
                    </a>
                </div>
            </div></div>
    </div>)
}

export default Login