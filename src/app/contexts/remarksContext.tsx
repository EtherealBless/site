// context for remarks
import { FC, ReactNode, createContext, useContext, useState } from 'react';

export const RemarksContext = createContext({
    left: { remark: { name: '', description: '' }, top: 0 },
    right: { remark: { name: '', description: '' }, top: 0 },
    lastUpdatedSide: 'left',
    setRemark: (
        remark: { name: string; description: string },
        top: number
    ) => {},
});

export default RemarksContext as typeof RemarksContext & {
    Provider: typeof RemarksContext.Provider;
};

export const RemarksProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [remarks, setRemarks] = useState({
        left: { remark: { name: '', description: '' }, top: 0 },
        right: { remark: { name: '', description: '' }, top: 0 },
        lastUpdatedSide: 'left',
    });

    const setRemark = (
        remark: { name: string; description: string },
        top: number
    ) => {
        setRemarks((prev) => ({
            ...prev,

            [prev.lastUpdatedSide === 'left' ? 'right' : 'left']: { remark, top },

            lastUpdatedSide: prev.lastUpdatedSide === 'left' ? 'right' : 'left',
            
        }));

        console.log(remarks);
    };

    const remarksContext = useRemarksContext();
    remarksContext.setRemark = setRemark;

    return (
        <RemarksContext.Provider value={{ ...remarks, setRemark }}>
            {children}
        </RemarksContext.Provider>
    );
}

export function useRemarksContext() {
    const remarks = useContext(RemarksContext);
    if (!remarks) {
        throw new Error('useRemarksContext must be used within a RemarksProvider');
    }
    return remarks;
} 

/**
 * example usage:
 * import { useContext } from 'react';
 * import { RemarksContext } from './contexts/remarksContext';
 * const remarks = useRemarksContext();
 * remarks.setRemark({ name: 'test', description: 'test' }, 'left');
 * remarks.setRemark({ name: 'test', description: 'test' }, 'right');
 * remarks.left.top = 10;
 * remarks.right.top = 10;
 * remarks.left.remark.name = 'test';
 * remarks.right.remark.name = 'test';
 *
 * faq:
 * 1. How to use in a component?
 *  1.1. import { useContext } from 'react';
 *  1.2. const remarks = useRemarksContext();
 *  1.3. remarks.setRemark({ name: 'test', description: 'test' }, 'left');
 *  1.4. remarks.setRemark({ name: 'test', description: 'test' }, 'right');
 *  1.5. remarks.left.top = 10;
 * 2. Will component re-render when state changes?
 *  2.1. It will only re-render when the state changes.
 * 3. How to change the state?
 *  3.1. use setRemark() to change the state.
 *  3.2. remarks.setRemark({ name: 'test', description: 'test' }, 'left');
 */
