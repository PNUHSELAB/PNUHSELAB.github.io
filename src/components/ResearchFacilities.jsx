import arXrealPro2 from '../assets/facility-ar-xreal-pro-2.png';
import digitalForceGaugeNidecFg7000 from '../assets/facility-digital-force-gauge-nidec-fg-7000.png';
import drivingSimulatorDrSim from '../assets/facility-driving-simulator-dr-sim.png';
import electronicSphygmomanometerNisseiDs182 from '../assets/facility-electronic-sphygmomanometer-nissei-ds-182.png';
import emgBagnoli8ch from '../assets/facility-emg-bagnoli-8ch.png';
import emgTrignoWireless from '../assets/facility-emg-trigno-wireless.png';
import eyeTrackerTobiiProGlasses2 from '../assets/facility-eye-tracker-tobii-pro-glasses-2.png';
import forcePlatformOr672000 from '../assets/facility-force-platform-or6-7-2000.png';
import gripForceKForceDynamometer from '../assets/facility-grip-force-k-force-dynamometer.png';
import hololens2 from '../assets/facility-mr-hololens-2.png';
import humanSimulationJack from '../assets/facility-human-simulation-jack.png';
import humanSkeletonModel from '../assets/facility-human-skeleton-model.png';
import illuminometerTesto540 from '../assets/facility-illuminometer-testo-540.png';
import metaQuest3 from '../assets/facility-vr-meta-quest-3.png';
import motionCaptureOptitrackPrime13 from '../assets/facility-motion-capture-optitrack-prime-13.png';
import pressureMatTekscanConformat from '../assets/facility-pressure-mat-tekscan-conformat.png';
import wirelessMotionTrackerMtwKit from '../assets/facility-wireless-motion-tracker-mtw-kit.png';

const facilityGroups = [
  {
    category: 'Biomechanics & Measurement Systems',
    items: [
      { name: 'EMG System: Delsys Bagnoli 8ch', image: emgBagnoli8ch },
      { name: 'EMG System: Delsys Trigno wireless device', image: emgTrignoWireless },
      { name: 'Motion Capture System: OptiTrack Prime 13', image: motionCaptureOptitrackPrime13 },
      { name: 'Force Platform System: OR6-7-2000', image: forcePlatformOr672000 },
      { name: 'Pressure Mat Sensor: Tekscan CONFORMat', image: pressureMatTekscanConformat },
      { name: 'Digital Force Gauge: Nidec FG-7000', image: digitalForceGaugeNidecFg7000 },
      { name: 'Grip Force: K-Force Dynamometer', image: gripForceKForceDynamometer },
      { name: 'Electronic Sphygmomanometer: Nissei DS-182', image: electronicSphygmomanometerNisseiDs182 },
      { name: 'Illuminometer: testo 540', image: illuminometerTesto540 },
    ],
  },
  {
    category: 'Simulation & Modeling',
    items: [
      { name: 'Driving Simulator: UC-win/Road Driving Sim (Dr. Sim)', image: drivingSimulatorDrSim },
      { name: 'Human Simulation and Modelling Software: Jack', image: humanSimulationJack },
      { name: 'Human Skeleton Model', image: humanSkeletonModel },
    ],
  },
  {
    category: 'Tracking, XR & Interaction Devices',
    items: [
      { name: 'Eye Tracker: Tobii Pro Glasses 2', image: eyeTrackerTobiiProGlasses2 },
      { name: 'Wireless Motion Tracker: MTw Development kit', image: wirelessMotionTrackerMtwKit },
      { name: 'Augmented Reality Device: Xreal pro 2', image: arXrealPro2 },
      { name: 'Virtual Reality Device: Meta Quest 3', image: metaQuest3 },
      { name: 'Mixed Reality Device: HoloLens 2', image: hololens2 },
    ],
  },
];

const ResearchFacilities = () => {
  return (
    <section id="facilities" className="border-t border-gray-100 bg-white pt-48 pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hse-blue">Research</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Research Facilities</h2>
          <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-hse-blue via-slate-500 to-slate-300" />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Core equipment and experimental infrastructure supporting ergonomics, biomechanics, human-system
            interaction, and immersive simulation research in the HSE Lab.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {facilityGroups.map((group) => (
            <section
              key={group.category}
              className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-6 py-8 shadow-[0_20px_55px_rgba(15,23,42,0.05)] md:px-10 md:py-10"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-4 w-4 rounded-[4px] border-2 border-[#d79b13] bg-[#fff7df]" />
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 md:text-[2rem]">{group.category}</h3>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {group.items.map((item) => (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-[24px] border border-slate-200 bg-white/95 shadow-[0_14px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,23,42,0.08)]"
                  >
                    <div className="grid min-h-[220px] grid-cols-[132px_minmax(0,1fr)] items-center gap-0 sm:grid-cols-[160px_minmax(0,1fr)]">
                      <div className="flex h-full items-center justify-center border-r border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-36 w-auto max-w-full object-contain sm:max-h-40"
                        />
                      </div>
                      <div className="p-6 sm:p-7">
                        <div className="flex items-start gap-3">
                          <span className="mt-2 inline-flex h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#c18b24] bg-[#fff7df]" />
                          <h4 className="text-lg font-extrabold leading-[1.5] tracking-[-0.02em] text-gray-950 md:text-[1.4rem]">
                            {item.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchFacilities;
