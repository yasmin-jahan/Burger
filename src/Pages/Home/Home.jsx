import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import '../../Styles/HomeStyle.css';
import Section1 from './Section1'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';


function Home() {
  return (
    <div>
      <Layout>
        {/* HOME SECTION HERO BANNER */}
        <Section1 />

        {/* HOME SECTION ABOUT */}
        <Section2 />

        {/* HOME SECTION BRAND */}
        <Section3 />

        {/* HOME SECTION MENU */}
        <Section4 />

        {/* HOME SECTION BANNER */}
        <Section5 />

        {/* HOME SECTION PROMOTION */}
        <Section6 />

        {/* HOME SECTION SHOP */}
        <Section7 />

        {/* HOME SECTION BLOG */}
        <Section8 />

        {/* HOME SECTION CONTACT */}
        <Section9 />



      </Layout>
    </div>
  )
}

export default Home