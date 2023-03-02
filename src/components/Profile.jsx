import React from 'react';
import styles from '../style';

const Profile = () => {
  return (
    <div className="pt-[65px]">
      <p
        className={`${styles.flexCenter} h-12 w-12 rounded-full border border-white10 bg-blue10 text-2xl`}
      >
        P
      </p>
      <div className="py-6">
        <h1 className="text-2xl">Prynss Maia da Silva</h1>
        <p className="text-lg text-blue10">prynssmaia@gmail.com</p>
      </div>
      <span>Insane, pero no mucho.</span>
    </div>
  );
};

export default Profile;
