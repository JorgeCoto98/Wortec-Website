'use client'

import React from 'react'

type Member = { id: string; name: string; role: string; src: string }

export default function TeamGallery({ initialMembers = [] as Member[] }) {
  const [members, setMembers] = React.useState<Member[]>(initialMembers)
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const onFiles = (files: FileList | null) => {
    if (!files?.length) return
    const newItems: Member[] = Array.from(files).map((file) => ({
      id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name: '',
      role: '',
      src: URL.createObjectURL(file),
    }))
    setMembers((prev) => [...newItems, ...prev])
  }

  const onDragOver: React.DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDrop: React.DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onFiles(e.dataTransfer.files)
  }

  const onRemove = (id: string) => {
    setMembers((prev) => {
      const target = prev.find((m) => m.id === id)
      if (target) URL.revokeObjectURL(target.src)
      return prev.filter((m) => m.id !== id)
    })
  }

  React.useEffect(() => {
    return () => members.forEach((m) => URL.revokeObjectURL(m.src))
  }, [members])

  return (
    <div className="space-y-6">
      {/* Dropzone / Input */}
      <label
        onDragOver={onDragOver}
        onDrop={onDrop}
        tabIndex={0}
        className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-10 outline-none transition hover:border-white/40 focus-visible:border-indigo-400"
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => onFiles(e.currentTarget.files)}
          className="sr-only"
        />
        <div className="text-center">
          <div className="text-sm font-medium text-white">Arrastra y suelta imágenes aquí</div>
          <div className="text-xs text-white/70">o haz clic para seleccionar archivos</div>
        </div>
      </label>

      {/* Grid */}
      {members.length > 0 ? (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => (
            <li key={m.id} className="group rounded-2xl border border-white/10 bg-white/5 p-2">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.src} alt={m.name || 'Miembro del equipo'} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => onRemove(m.id)}
                  className="absolute right-2 top-2 hidden rounded-full bg-black/60 px-2 py-1 text-xs text-white/90 backdrop-blur-sm group-hover:block"
                >
                  Quitar
                </button>
              </div>
              <div className="mt-3 space-y-2">
                <input
                  value={m.name}
                  onChange={(e) =>
                    setMembers((prev) => prev.map((x) => (x.id === m.id ? { ...x, name: e.target.value } : x)))
                  }
                  placeholder="Nombre"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none"
                />
                <input
                  value={m.role}
                  onChange={(e) =>
                    setMembers((prev) => prev.map((x) => (x.id === m.id ? { ...x, role: e.target.value } : x)))
                  }
                  placeholder="Rol (p. ej., Desarrollador/a)"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
          Aún no has agregado miembros. Sube algunas fotos para empezar.
        </div>
      )}

      <p className="text-xs text-white/50">
        * Vista previa local. Para persistir, integra S3/Supabase/Firebase y guarda nombre/rol en tu base de datos.
      </p>
    </div>
  )
}