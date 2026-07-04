import { useEffect, useState } from 'react'

import { fetchSiteSnapshot, type SiteSnapshot } from '../services/siteService'

type SnapshotState = {
  data: SiteSnapshot | null
  isLoading: boolean
}

export function useSiteSnapshot() {
  const [state, setState] = useState<SnapshotState>({
    data: null,
    isLoading: true,
  })

  useEffect(() => {
    let isActive = true

    fetchSiteSnapshot().then((data) => {
      if (isActive) {
        setState({ data, isLoading: false })
      }
    })

    return () => {
      isActive = false
    }
  }, [])

  return state
}
