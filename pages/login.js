import styles from "../styles/Home.module.scss";
import Head from "next/head";
import regStyles from "../styles/register.module.scss";
import { useRouter } from "next/router";
import React, { useState } from 'react';

function Login() {
    const router = useRouter()
    const passRef = React.createRef();
    const rpPassRef = React.createRef();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rp_pass, setRpPass] = useState('');
    const [lg, setLg] = useState(false);

    function handleSubmit(event) {
        setLg(true)
        setTimeout(function () {
            setLg(false)
            alert('Login success! Goto detail now..')
            router.push('/detail')
        }, 2000)
        event.preventDefault();
    }

    function onChangeInput(event) {
        console.log(event.target.name, event.target.value)
        switch (event.target.name) {
            case 'email':
                setEmail(event.target.value);
                break;
            case 'pass':
                setPass(event.target.value);
                break;
        }
    }

    return (
        <div className={styles.container}>
          <Head>
            <title>Login</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
              <div className="main-wrap">
                  <div className="text-center">
                      <h4>Login</h4>
                      <p>get started with our service</p>
                      <form method="post" onSubmit={handleSubmit}>
                          <input type="email" required value={email} name="email" onChange={onChangeInput} placeholder="Your email" />
                          <input type="password" required value={pass} name="pass" onChange={onChangeInput} placeholder="Your password" />
                          <input type="submit" disabled={lg} value="Login" />
                      </form>
                  </div>
              </div>
          </main>
        </div>
    )
}

export default Login
