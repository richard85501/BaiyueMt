import Link from 'next/link';
import {
  AppstoreOutlined,
  SettingOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import styles from './mainHeader.module.scss';
import Button from '../utilities/Button';
import { useRouter } from 'next/router';

const list = [
  {
    label: '百岳一覽',
    key: 'mail',
    icon: <AppstoreOutlined />,
    url: '/ghost',
  },
  {
    label: '類別資料',
    key: 'app',
    icon: <SettingOutlined />,
    url: '/categories',
  },
  // {
  //   label: '收藏清單',
  //   key: 'SubMenu',
  //   icon: <SettingOutlined />,
  //   url: '/collect',
  // },
];

const mainHeader = () => {
  const router = useRouter();
  return (
    <header className={styles.center}>
      <nav className={styles.nav}>
        <Link href={'/'} className={styles.logo}>
          <img src="/images/route.png" />
        </Link>
        {list.map((item, idx) => (
          <div key={item + idx} className={styles.wrapper}>
            <Button
              label="百岳一覽"
              type="tertiary"
              size="medium"
              iconPlace="before"
              icon={item.icon}
              onClick={() => router.push(item.url)}
            />
          </div>
        ))}
        <Link href={'/login'} className={styles.login}>
          <div className={styles.loginIcon}>
            <GlobalOutlined />
            <span className={styles.text}>Login</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};
export default mainHeader;
