import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-2xl mx-auto">
          <p>
            Hi, I’m <strong>Oliver Jarosch</strong>, a <strong>Cloud Solution Architect</strong> based in <strong>Germany</strong> with a passion for technology and problem-solving. Over the years, I’ve gained a diverse skill set ranging from <strong>cloud architecture</strong> to <strong>security</strong> and <strong>DevOps</strong>. My expertise revolves around utilizing the <strong>AWS Well-Architected Framework</strong> to ensure my clients can fully leverage the power and efficiency of <strong>public cloud</strong> platforms.
          </p><br/>
          <p>
            My primary goal is to help businesses unlock the full potential of the cloud, making their systems more <strong>resilient</strong>, <strong>scalable</strong>, and <strong>cost-effective</strong>.
          </p><br/>
          <p>
  When I’m not architecting cloud solutions, I dive into my passion for Smart Homes. I use <strong>Home Assistant</strong> as the backbone of my smart home setup, automating real-world tasks and enhancing daily life. To bring my automation ideas to life, I rely on tools like my <strong>3D printer</strong> and <strong>ESP32 boards</strong> to create custom devices and solutions. I believe that automation shouldn't just be confined to the cloud—it can seamlessly integrate into the physical world as well.
</p>
<br/>
          <p>
            Outside of tech, you’ll likely find me riding one of my bikes—whether it’s <strong>gravel</strong> or <strong>enduro mountain biking</strong>. I’m a big fan of being outdoors, as it offers a perfect balance to the screen time and helps me recharge.
          </p><br/>
          <p>
            Fun fact: I recently transitioned from <strong>Microsoft Windows</strong> to a full-time setup on atomic <strong>Linux distros</strong>—<strong>Bazzite</strong> for gaming and <strong>Aurora</strong> for development. At work, however, I prefer the sleek efficiency of a <strong>Mac</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;