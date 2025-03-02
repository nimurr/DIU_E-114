import { IoChevronBack } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import CustomButton from "../../utils/CustomButton";
import { useGetPrivacyPolicyQuery } from "../../redux/features/setting/settingApi";
import { Spin } from "antd"; // Importing Spin

const PrivacyPolicyPage = () => {
  const { data: privacyPolicyData, isLoading } = useGetPrivacyPolicyQuery();

  return (
    <section className="w-full h-full min-h-screen">
      <div className="flex justify-between items-center py-5">
        <Link to="/settings" className="flex gap-4 items-center">
          <>
            <IoChevronBack className="text-2xl" />
          </>
          <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        </Link>
        <Link to={'/settings/edit-privacy-policy/11'}>
          <button className="bg-[#038c6d] text-white flex items-center gap-2 p-2 rounded-md font-bold" border>
            <TbEdit className="size-5" />
            <span>Edit</span>
          </button>
        </Link>
      </div>

      {/* Show Spin loader if data is loading */}
      {isLoading ? (
        <div className="flex justify-center items-center h-[calc(100vh-120px)]">
          <Spin/>
        </div>
      ) : (
        <div>
          {privacyPolicyData &&
            privacyPolicyData.map((privacy) => (
              <p key={privacy._id} className="text-lg">
                {/* {privacy.content} */}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex ad voluptate dolores, debitis qui vitae nobis! Sit hic eligendi qui cumque mollitia illum fuga fugit dolores odio, commodi placeat omnis? Ratione pariatur dolor consequatur eligendi aliquid at recusandae maiores adipisci, laboriosam corrupti excepturi ad dolorum? Minima corrupti deserunt ipsum, illum eum et numquam nihil alias exercitationem! Minus voluptate, commodi quod laborum expedita hic officiis doloremque voluptatum nesciunt minima id ratione neque, impedit unde possimus, veniam architecto harum nostrum quibusdam voluptas eius magnam itaque animi quo. Fugiat id explicabo repellendus saepe excepturi nam cumque necessitatibus enim aperiam impedit? Aut, dolorem!
              </p>
            ))}
        </div>
      )}
    </section>
  );
}

export default PrivacyPolicyPage;
