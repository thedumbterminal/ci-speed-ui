import useLocalStorageState from 'use-local-storage-state'

const getProjectId = (): number => {
  const [id, _] = useLocalStorageState<number>('projectId', {
    defaultValue: 0,
  })
  return id
}

export { getProjectId }
