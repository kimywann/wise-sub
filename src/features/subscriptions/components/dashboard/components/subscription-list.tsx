import { useState } from "react";
import { Link } from "react-router-dom";

import EditSubscriptionModal from "@/features/subscriptions/components/modal/edit-subscription-modal";

import { useSubscriptionState } from "@/features/subscriptions/components/hooks/useSubscriptionState";
import type { UserSubscription } from "@/common/types/user-subscription-type";

import Button from "@/common/components/button/button";

interface SubscriptionListProps {
  subscriptions: UserSubscription[];
  onSubscriptionUpdate: (updatedSubscriptions: UserSubscription[]) => void;
}

export default function SubscriptionList({
  subscriptions,
  onSubscriptionUpdate,
}: SubscriptionListProps) {
  const [openEditModal, setOpenEditModal] = useState<number | null>(null);

  const { handleUpdate, handleDelete } = useSubscriptionState({
    subscriptions,
    onSubscriptionUpdate,
  });

  const handleOpenEditModal = (id: number) => {
    setOpenEditModal(id);
  };

  const handleCloseModal = () => {
    setOpenEditModal(null);
  };

  const handleUpdateSubscription = async (
    id: number,
    updatedData: { service_name: string; price: string; start_date: string },
  ) => {
    const success = await handleUpdate(id, updatedData);
    if (success) {
      setOpenEditModal(null);
    }
  };

  const handleDeleteSubscription = async (id: number) => {
    const success = await handleDelete(id);
    if (success) {
      setOpenEditModal(null);
    }
  };

  return (
    <div>
      <div className="mt-10 mb-6 flex flex-row justify-between">
        <h2 className="text-2xl font-semibold text-slate-900">
          구독 중인 서비스
        </h2>

        {/* 구독 서비스 추가 버튼 */}
        <div>
          <Link to="/subscription/add">
            <Button type="button" size="md" variant="primary">
              구독 서비스 추가
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((item) => (
          <div key={item.id}>
            <div
              onClick={() => handleOpenEditModal(item.id)}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-300 p-4 hover:border-indigo-500 hover:shadow-md"
            >
              <div className="h-10 w-10 rounded-full bg-indigo-600"></div>
              <div className="flex-1">
                <h3 className="font-medium text-slate-900">
                  {item.service_name}
                </h3>
                <p className="text-sm text-slate-600">
                  {item.price.toLocaleString()}원/월
                </p>
              </div>
            </div>

            {openEditModal === item.id && (
              <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-400/30">
                <EditSubscriptionModal
                  onClose={handleCloseModal}
                  id={item.id}
                  serviceName={item.service_name}
                  price={item.price}
                  startDate={item.start_date}
                  billingCycle={item.billing_cycle}
                  onUpdate={(updatedData) =>
                    handleUpdateSubscription(item.id, updatedData)
                  }
                  onDelete={() => handleDeleteSubscription(item.id)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
