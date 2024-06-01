import Image from 'next/image';
import { motion } from 'framer-motion';

const Notification = ({ className, title }) => {
  return (
    <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 2, repeat: Infinity }}
      className={`${
        className || ''
      } flex items-center p-4 pr-6 backdrop-blur border-black rounded-2xl gap-5 relative`}
    >
      <Image
        src="/image-1.png"
        width={62}
        height={62}
        alt="Notification Image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
              <Image
                src="/image-2.png"
                width={20}
                height={20}
                alt="Notification Image 1"
                className="w-full"
              />
            </li>
            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
              <Image
                src="/image-3.png"
                width={20}
                height={20}
                alt="Notification Image 2"
                className="w-full"
              />
            </li>
            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
              <Image
                src="/image-4.png"
                width={20}
                height={20}
                alt="Notification Image 2"
                className="w-full"
              />
            </li>
          </ul>
          <div className="body-2 text-n-13">.....</div>
        </div>
      </div>

     
    </motion.div>
  );
};

export default Notification;
