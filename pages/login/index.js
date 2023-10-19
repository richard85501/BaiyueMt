import React from 'react';
import styles from './login.module.scss';
import TextField from '@/components/utilities/TextField';
import { SwapLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Button from '@/components/utilities/Button';

const LoginPage = () => {
  return (
    <div className={styles.fullPage}>
      <img className={styles.leftImg} src="./images/login.jpg" />
      <div className={styles.right}>
        <div className={styles.return}>
          <Link href="./">
            <SwapLeftOutlined />
          </Link>
        </div>
        <div className={styles.main}>
          <h1 className={styles.title}>
            <img src="/images/route.png" />
            Login
          </h1>
          <div className={styles.input}>
            <TextField
              placeholder="Name"
              style={{ border: '1px solid #212121' }}
            />
            <TextField
              placeholder="Password"
              style={{ border: '1px solid #212121' }}
            />
          </div>
          <div className={styles.wrapper}>
            <Button
              label="SUBMIT"
              size="large"
              type="secondary"
              style={{ width: '100%' }}
              onClick={() => {}}
            />
          </div>
          <div className={styles.register}>
            我還沒有帳號?
            <Link href="/register">
              <span>註冊</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
