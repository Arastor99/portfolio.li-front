import { motion } from "framer-motion";
import { useState } from "react";

import { Profile } from "@common/types/profile";

import Modal from "../modal/Modal";
import ModalRegister from "../modal/ModalRegister";
import { ArrowLeftCircle, Eye, Plus, RefreshCcw, User } from "lucide-react";

import { getTemplate } from "@common/utils/templates";
interface Props {
  type: "portfolio" | "cv";
  profile: Profile | undefined;
  TemplateName: string;
  isAuthenticated?: boolean;
  mode?: "create" | "update";
  handleBack: () => void;
  handleAction: () => void;
}

export default function Step4Preview({
  type,
  profile,
  handleBack,
  TemplateName,
  handleAction,
  isAuthenticated = false,
  mode = "create",
}: Props) {
  const [modalRegister, setModalRegister] = useState(false);

  const handleViewFullPreview = () => {
    window.open("/home/preview", "_blank");

    localStorage.setItem("profileData", JSON.stringify(profile));
    localStorage.setItem("templateName", JSON.stringify(TemplateName));
  };

  if (!profile) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Preview your {type === "cv" ? "CV" : "portfolio"}
          </h2>
          <div className="flex flex-col  gap-8 items-center">
            <div className="w-full h-[500px] overflow-x-hidden overflow-auto border rounded-xl shadow-lg flex justify-center bg-[#030014] hide-scrollbar">
              <div className="scale-75 origin-top transform  ">
                {getTemplate(TemplateName, profile)}
              </div>
            </div>
            {/* </div> */}
            <div className="w-full  space-y-6 md:inline-flex items-start justify-between gap-6">
              {!isAuthenticated ? (
                <div className="p-4 rounded-lg bg-green-100 dark:bg-green-100">
                  <h3 className="font-semibold text-lg mb-2">
                    Want to share your {type === "cv" ? "CV" : "portfolio"}?
                  </h3>
                  <p className="text-gray-800 text-sm">
                    Create an account to get your own personalized link, share
                    it with the world, and update it anytime. It's quick and
                    free!
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-green-100 dark:bg-green-100">
                  <h3 className="font-semibold text-lg mb-2">
                    ¡Todo listo! <br />
                    Pulsa el botón para crear tu portfolio.
                  </h3>
                </div>
              )}

              <div className="space-y-3 ">
                <button
                  onClick={() => isAuthenticated ? handleAction(): setModalRegister(true)}
                  type="button"
                  className="w-full inline-flex items-center justify-center bg-[#6366F1] text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-200"
                >
                  {isAuthenticated ? (
                    <>
                      {" "}
                      {mode === "create" ? (<><Plus /> Create portoflio </>) : (<><RefreshCcw /> Update portfolio</>)}
                      
                    </>
                  ) : (
                    <>
                      <User />
                      Create Account
                    </>
                  )}
                </button>

                <button
                  onClick={handleViewFullPreview}
                  type="button"
                  className="w-full cursor-pointer inline-flex items-center justify-center gap-2 border border-gray-300 rounded-lg bg-white text-gray-800 font-semibold py-2 px-4 hover:bg-gray-100 transition duration-200"
                >
                  <Eye />
                  View Full Preview
                </button>

                <button
                  onClick={handleBack}
                  className="w-full cursor-pointer inline-flex items-center justify-center gap-2  text-gray-600 font-semibold py-2 px-4"
                >
                  <ArrowLeftCircle />
                  <span className="text-sm">Back</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Modal isOpen={modalRegister} onClose={() => setModalRegister(false)}>
        <ModalRegister
          onClose={() => setModalRegister(false)}
          triggerRegister={async () => handleAction()}
        />
      </Modal>
    </>
  );
}
