import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * The zustand store that relate to the authentification
 */
const useAuthStore = create(
	persist(
		(set) => ({
			isAuth: false,
			jwt: null,
			isReady: false,
			setLogin: (newJwt) => set({ isAuth: true, jwt: newJwt }),
			setLogout: () => set({ isAuth: false, jwt: null }),
			setIsReady: () => set({ isReady: true }),
		}),
		{
			name: 'auth-storage-parceller',
			storage: createJSONStorage(() => localStorage),
			onRehydrateStorage: () => (state) => {
				state.setIsReady();
			}
		},
	),
)

export default useAuthStore;