import React from 'react';
import styles from '../style';

const Profile = () => {
  return (
    <div className="pt-[65px]">
      <p className={`${styles.flexCenter} h-12 w-12 rounded-full bg-primary text-xl`}>
        P
      </p>
      <div className="py-6">
        <h1 className="text-xl">Prynss Maia da Silva</h1>
        <a href="mailto:prynssmaia@gmail.com" className="text-base text-primary">
          prynssmaia@gmail.com
        </a>
      </div>
      <span>Losing myself to design while i listen music.</span>
    </div>
  );
};

export default Profile;
