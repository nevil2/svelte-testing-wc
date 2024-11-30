<script lang="ts"> 
  import { onMount } from 'svelte'

  onMount(async() => {
    // needs window to be defined so cannot load server-side
    await import('$lib/image-wc.umd.cjs')
  })

  let image: File | undefined = $state(undefined)

  let getFile = $state(false) // toggle to collect the image from wc-image

  const saveAs = (blob: Blob, filename: string) => {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
  }

  const saveFile = (e: CustomEvent) => {
    getFile = false
    const imageFile = e.detail[0] as File
    saveAs(imageFile, 'topo.svg')
  }

  const handleFile = (event: Event) => {
		image = (event.target as any)?.files?.[0] as File
	}

</script>

<h1>Testing Image Based Web Component</h1>

{#if !image}
  Please upload a jpg image
  <input 
    type="file" 
    name="photo" 
    accept="image/*" 
    multiple={false}
    class="input-file"
    onchange={handleFile} 
  />
{:else}
  <button onclick={() => getFile = true}>Get File</button> 
{/if}
<wc-image image={image} getFile={getFile} onchange={saveFile}></wc-image>



