import { Form, Button, Select, Input, Upload, message } from "antd";

import { FaImage } from "react-icons/fa6";
const { Dragger } = Upload;
const { TextArea } = Input;

const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const categories = [
  { value: "elecciones", label: "Elecciones" },
  { value: "noticias", label: "Noticias" },
  { value: "quito", label: "Quito" },
];

function ArticleForm() {
  return (
    <Form className="bg-cyan-900 rounded-xl px-8 py-4">
      <h2 className="text-white text-3xl mb-2">Título</h2>
      <Form.Item name="Título">
        <Input className="bg-cyan-900 border-slate-400 text-white transition-all duration-300 ease-in-out hover:border-white focus:border-white" />
      </Form.Item>
      <h2 className="text-white text-3xl mb-2">Banner</h2>
      <Form.Item>
        <Dragger {...props} className="">
          <FaImage className="text-white text-9xl mx-auto" />
          <p className="text-white text-xl">
            Da click o arrastra una imagen para subirla
          </p>
        </Dragger>
      </Form.Item>
      <h2 className="text-white text-3xl mb-2">Cuerpo del Artículo</h2>
      <Form.Item>
        <TextArea
          autoSize={{ minRows: 6 }}
          className="bg-cyan-900 border-slate-400 text-white transition-all duration-300 ease-in-out hover:border-white focus:border-white"
        />
      </Form.Item>
      <h2 className="text-white text-3xl mb-2">Información Adicional</h2>
      <div className="flex justify-between py-4 px-3 border rounded-md border-slate-400 text-white text-xl">
        <div className="w-1/4 flex gap-x-4">
          <p className="">Categorías</p>
          <Form.Item>
            <Select
              size="middle"
              showSearch
              placeholder="Seleccionar"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={categories}
            />
          </Form.Item>
        </div>
        <div className="w-1/4 flex gap-x-4">
          <p>Fecha</p>
          <Form.Item>
            <Select
              size="middle"
              showSearch
              placeholder="Seleccionar"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={categories}
            />
          </Form.Item>
        </div>
        <div className="w-1/4 flex gap-x-4">
          <p>Visibilidad</p>
          <Form.Item>
            <Select
              size="middle"
              showSearch
              placeholder="Seleccionar"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={categories}
            />
          </Form.Item>
        </div>
        <div className="w-1/4 flex gap-x-4">
          <p>Tipo</p>
          <Form.Item>
            <Select
              size="middle"
              showSearch
              placeholder="Seleccionar"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={categories}
            />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}

export default ArticleForm;
