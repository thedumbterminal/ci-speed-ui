import useLocalStorageState from 'use-local-storage-state'

const useProjectId = (): number => {
  const [id] = useLocalStorageState<number>('projectId', {
    defaultValue: 0,
  })
  return id
}

export { useProjectId }
