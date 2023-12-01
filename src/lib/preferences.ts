import useLocalStorageState from 'use-local-storage-state'

const useProjectId = (): number => {
  const [id] = useLocalStorageState<number>('projectId', {
    defaultValue: 0,
  })
  return id
}

const useAnalyseDays = (): number => {
  const [days] = useLocalStorageState<number>('analyseDays', {
    defaultValue: 30,
  })
  return days
}

export { useProjectId, useAnalyseDays }
