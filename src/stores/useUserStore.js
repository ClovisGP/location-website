import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * The zustand store that relate to the authentification
 */
const useUserStore = create(
	persist(
		(set) => ({
			_id: null, // string
			name: null, // string
			role: null, // {_id, label}
            privileges: [], // [string]
            isReady: false,
			setData: (_id, name, role, privileges) => set({
                _id: _id,
                name: name,
                role: {_id: role._id, label: role.label},
                privileges: privileges.map((x) => x.label),
            }),
            setRemoveData: () => set({
                _id: null,
                name: null,
                role: null,
                privileges: [],
            }),
			setIsReady: () => set({ isReady: true }),
		}),
		{
			name: 'user-storage-parceller',
			storage: createJSONStorage(() => localStorage),
			onRehydrateStorage: () => (state) => {
				state.setIsReady();
			}
		},
	),
)

export default useUserStore;