import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import InputLabel from "@/components/ui/InputLabel";
import Button from "@/components/ui/Button";

import { useUser } from "@/context/UserContext";

const userSchema = z.object({
  id: z.string(),
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
});

type UserFormData = z.infer<typeof userSchema>;

const EditUser: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    setValue("id", user.id);
    setValue("name", user.name);
    setValue("email", user.email);
  }, [user, navigate, setValue]);

  const onSubmit = (data: UserFormData) => {
    setUser(data);
    alert("Usuário atualizado com sucesso!");
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Editar Usuário</h1>

        <input type="hidden" {...register("id")} />

        <InputLabel
          label="Nome"
          id="name"
          error={errors.name?.message}
          {...register("name")}
        />

        <InputLabel
          label="Email"
          id="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 font-semibold hover:bg-blue-700 transition"
          ariaLabel="Salvar usuário"
          variant="primary"
        >
          Salvar
        </Button>
      </form>
    </main>
  );
};

export default EditUser;
